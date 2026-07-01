# `discoveryEngineDataConnector` Submodule <a name="`discoveryEngineDataConnector` Submodule" id="@cdktn/provider-google.discoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataConnector <a name="DiscoveryEngineDataConnector" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnector(scope Construct, id *string, config DiscoveryEngineDataConnectorConfig) DiscoveryEngineDataConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig">DiscoveryEngineDataConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig">DiscoveryEngineDataConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig">PutActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig">PutBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs">PutDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities">PutEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig">ResetActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled">ResetAutoRunDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig">ResetBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes">ResetConnectorModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion">ResetDataSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs">ResetDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities">ResetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval">ResetIncrementalRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled">ResetIncrementalSyncDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams">ResetJsonParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled">ResetStaticIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode">ResetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionConfig` <a name="PutActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig"></a>

```go
func PutActionConfig(value DiscoveryEngineDataConnectorActionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `PutBapConfig` <a name="PutBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig"></a>

```go
func PutBapConfig(value DiscoveryEngineDataConnectorBapConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `PutDestinationConfigs` <a name="PutDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs"></a>

```go
func PutDestinationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntities` <a name="PutEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities"></a>

```go
func PutEntities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineDataConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `ResetActionConfig` <a name="ResetActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig"></a>

```go
func ResetActionConfig()
```

##### `ResetAutoRunDisabled` <a name="ResetAutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```go
func ResetAutoRunDisabled()
```

##### `ResetBapConfig` <a name="ResetBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig"></a>

```go
func ResetBapConfig()
```

##### `ResetConnectorModes` <a name="ResetConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes"></a>

```go
func ResetConnectorModes()
```

##### `ResetDataSourceVersion` <a name="ResetDataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```go
func ResetDataSourceVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDestinationConfigs` <a name="ResetDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```go
func ResetDestinationConfigs()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities"></a>

```go
func ResetEntities()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetIncrementalRefreshInterval` <a name="ResetIncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```go
func ResetIncrementalRefreshInterval()
```

##### `ResetIncrementalSyncDisabled` <a name="ResetIncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```go
func ResetIncrementalSyncDisabled()
```

##### `ResetJsonParams` <a name="ResetJsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams"></a>

```go
func ResetJsonParams()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams"></a>

```go
func ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStaticIpEnabled` <a name="ResetStaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```go
func ResetStaticIpEnabled()
```

##### `ResetSyncMode` <a name="ResetSyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode"></a>

```go
func ResetSyncMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.DiscoveryEngineDataConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.DiscoveryEngineDataConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.DiscoveryEngineDataConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.DiscoveryEngineDataConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineDataConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState">ActionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons">BlockingReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs">DestinationConfigs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities">Entities</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime">LastSyncTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime">LatestPauseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId">PrivateConnectivityProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState">RealtimeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses">StaticIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput">ActionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput">AutoRunDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput">BapConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput">CollectionDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput">ConnectorModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput">DataSourceVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput">DestinationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput">EntitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">IncrementalRefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">IncrementalSyncDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput">JsonParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput">StaticIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput">SyncModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes">ConnectorModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion">DataSourceVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams">JsonParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode">SyncMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionConfig`<sup>Required</sup> <a name="ActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig"></a>

```go
func ActionConfig() DiscoveryEngineDataConnectorActionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `ActionState`<sup>Required</sup> <a name="ActionState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState"></a>

```go
func ActionState() *string
```

- *Type:* *string

---

##### `BapConfig`<sup>Required</sup> <a name="BapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig"></a>

```go
func BapConfig() DiscoveryEngineDataConnectorBapConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `BlockingReasons`<sup>Required</sup> <a name="BlockingReasons" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons"></a>

```go
func BlockingReasons() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestinationConfigs`<sup>Required</sup> <a name="DestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs"></a>

```go
func DestinationConfigs() DiscoveryEngineDataConnectorDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities"></a>

```go
func Entities() DiscoveryEngineDataConnectorEntitiesList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors"></a>

```go
func Errors() DiscoveryEngineDataConnectorErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime"></a>

```go
func LastSyncTime() *string
```

- *Type:* *string

---

##### `LatestPauseTime`<sup>Required</sup> <a name="LatestPauseTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime"></a>

```go
func LatestPauseTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateConnectivityProjectId`<sup>Required</sup> <a name="PrivateConnectivityProjectId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```go
func PrivateConnectivityProjectId() *string
```

- *Type:* *string

---

##### `RealtimeState`<sup>Required</sup> <a name="RealtimeState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState"></a>

```go
func RealtimeState() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StaticIpAddresses`<sup>Required</sup> <a name="StaticIpAddresses" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```go
func StaticIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineDataConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionConfigInput`<sup>Optional</sup> <a name="ActionConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput"></a>

```go
func ActionConfigInput() DiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `AutoRunDisabledInput`<sup>Optional</sup> <a name="AutoRunDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```go
func AutoRunDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `BapConfigInput`<sup>Optional</sup> <a name="BapConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput"></a>

```go
func BapConfigInput() DiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `CollectionDisplayNameInput`<sup>Optional</sup> <a name="CollectionDisplayNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```go
func CollectionDisplayNameInput() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `ConnectorModesInput`<sup>Optional</sup> <a name="ConnectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput"></a>

```go
func ConnectorModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `DataSourceVersionInput`<sup>Optional</sup> <a name="DataSourceVersionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```go
func DataSourceVersionInput() *f64
```

- *Type:* *f64

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DestinationConfigsInput`<sup>Optional</sup> <a name="DestinationConfigsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```go
func DestinationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput"></a>

```go
func EntitiesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncrementalRefreshIntervalInput`<sup>Optional</sup> <a name="IncrementalRefreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```go
func IncrementalRefreshIntervalInput() *string
```

- *Type:* *string

---

##### `IncrementalSyncDisabledInput`<sup>Optional</sup> <a name="IncrementalSyncDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```go
func IncrementalSyncDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `JsonParamsInput`<sup>Optional</sup> <a name="JsonParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```go
func JsonParamsInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput"></a>

```go
func ParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```go
func RefreshIntervalInput() *string
```

- *Type:* *string

---

##### `StaticIpEnabledInput`<sup>Optional</sup> <a name="StaticIpEnabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```go
func StaticIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SyncModeInput`<sup>Optional</sup> <a name="SyncModeInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput"></a>

```go
func SyncModeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRunDisabled`<sup>Required</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```go
func AutoRunDisabled() interface{}
```

- *Type:* interface{}

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```go
func CollectionDisplayName() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `ConnectorModes`<sup>Required</sup> <a name="ConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes"></a>

```go
func ConnectorModes() *[]*string
```

- *Type:* *[]*string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `DataSourceVersion`<sup>Required</sup> <a name="DataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```go
func DataSourceVersion() *f64
```

- *Type:* *f64

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncrementalRefreshInterval`<sup>Required</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```go
func IncrementalRefreshInterval() *string
```

- *Type:* *string

---

##### `IncrementalSyncDisabled`<sup>Required</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```go
func IncrementalSyncDisabled() interface{}
```

- *Type:* interface{}

---

##### `JsonParams`<sup>Required</sup> <a name="JsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams"></a>

```go
func JsonParams() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params"></a>

```go
func Params() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

##### `StaticIpEnabled`<sup>Required</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```go
func StaticIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `SyncMode`<sup>Required</sup> <a name="SyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode"></a>

```go
func SyncMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataConnectorActionConfig <a name="DiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorActionConfig {
	ActionParams: *map[string]*string,
	CreateBapConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams">ActionParams</a></code> | <code>*map[string]*string</code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection">CreateBapConnection</a></code> | <code>interface{}</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `ActionParams`<sup>Optional</sup> <a name="ActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```go
ActionParams *map[string]*string
```

- *Type:* *map[string]*string

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}

---

##### `CreateBapConnection`<sup>Optional</sup> <a name="CreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```go
CreateBapConnection interface{}
```

- *Type:* interface{}

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}

---

### DiscoveryEngineDataConnectorBapConfig <a name="DiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorBapConfig {
	EnabledActions: *[]*string,
	SupportedConnectorModes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions">EnabledActions</a></code> | <code>*[]*string</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>*[]*string</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `EnabledActions`<sup>Optional</sup> <a name="EnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```go
EnabledActions *[]*string
```

- *Type:* *[]*string

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}

---

##### `SupportedConnectorModes`<sup>Optional</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```go
SupportedConnectorModes *[]*string
```

- *Type:* *[]*string

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}

---

### DiscoveryEngineDataConnectorConfig <a name="DiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionDisplayName: *string,
	CollectionId: *string,
	DataSource: *string,
	Location: *string,
	RefreshInterval: *string,
	ActionConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig,
	AutoRunDisabled: interface{},
	BapConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig,
	ConnectorModes: *[]*string,
	DataSourceVersion: *f64,
	DeletionPolicy: *string,
	DestinationConfigs: interface{},
	Entities: interface{},
	Id: *string,
	IncrementalRefreshInterval: *string,
	IncrementalSyncDisabled: interface{},
	JsonParams: *string,
	KmsKeyName: *string,
	Params: *map[string]*string,
	Project: *string,
	StaticIpEnabled: interface{},
	SyncMode: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>*string</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource">DataSource</a></code> | <code>*string</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>interface{}</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes">ConnectorModes</a></code> | <code>*[]*string</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion">DataSourceVersion</a></code> | <code>*f64</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs">DestinationConfigs</a></code> | <code>interface{}</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities">Entities</a></code> | <code>interface{}</code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>*string</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>interface{}</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams">JsonParams</a></code> | <code>*string</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>interface{}</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode">SyncMode</a></code> | <code>*string</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```go
CollectionDisplayName *string
```

- *Type:* *string

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```go
RefreshInterval *string
```

- *Type:* *string

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `ActionConfig`<sup>Optional</sup> <a name="ActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```go
ActionConfig DiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `AutoRunDisabled`<sup>Optional</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```go
AutoRunDisabled interface{}
```

- *Type:* interface{}

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `BapConfig`<sup>Optional</sup> <a name="BapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```go
BapConfig DiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `ConnectorModes`<sup>Optional</sup> <a name="ConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```go
ConnectorModes *[]*string
```

- *Type:* *[]*string

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `DataSourceVersion`<sup>Optional</sup> <a name="DataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```go
DataSourceVersion *f64
```

- *Type:* *f64

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#deletion_policy DiscoveryEngineDataConnector#deletion_policy}

---

##### `DestinationConfigs`<sup>Optional</sup> <a name="DestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```go
DestinationConfigs interface{}
```

- *Type:* interface{}

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities"></a>

```go
Entities interface{}
```

- *Type:* interface{}

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalRefreshInterval`<sup>Optional</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```go
IncrementalRefreshInterval *string
```

- *Type:* *string

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `IncrementalSyncDisabled`<sup>Optional</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```go
IncrementalSyncDisabled interface{}
```

- *Type:* interface{}

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `JsonParams`<sup>Optional</sup> <a name="JsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```go
JsonParams *string
```

- *Type:* *string

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `StaticIpEnabled`<sup>Optional</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```go
StaticIpEnabled interface{}
```

- *Type:* interface{}

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `SyncMode`<sup>Optional</sup> <a name="SyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```go
SyncMode *string
```

- *Type:* *string

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineDataConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

### DiscoveryEngineDataConnectorDestinationConfigs <a name="DiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorDestinationConfigs {
	Destinations: interface{},
	Key: *string,
	Params: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key">Key</a></code> | <code>*string</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params">Params</a></code> | <code>*string</code> | Additional parameters for this destination config in structured json format. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#destinations DiscoveryEngineDataConnector#destinations}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#key DiscoveryEngineDataConnector#key}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```go
Params *string
```

- *Type:* *string

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations {
	Host: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">Host</a></code> | <code>*string</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">Port</a></code> | <code>*f64</code> | Target port number accepted by the destination. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```go
Host *string
```

- *Type:* *string

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#host DiscoveryEngineDataConnector#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#port DiscoveryEngineDataConnector#port}

---

### DiscoveryEngineDataConnectorEntities <a name="DiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorEntities {
	EntityName: *string,
	KeyPropertyMappings: *map[string]*string,
	Params: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName">EntityName</a></code> | <code>*string</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>*map[string]*string</code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params">Params</a></code> | <code>*string</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName"></a>

```go
EntityName *string
```

- *Type:* *string

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#entity_name DiscoveryEngineDataConnector#entity_name}

---

##### `KeyPropertyMappings`<sup>Optional</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```go
KeyPropertyMappings *map[string]*string
```

- *Type:* *map[string]*string

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#key_property_mappings DiscoveryEngineDataConnector#key_property_mappings}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params"></a>

```go
Params *string
```

- *Type:* *string

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorErrors <a name="DiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorErrors {

}
```


### DiscoveryEngineDataConnectorTimeouts <a name="DiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

&discoveryenginedataconnector.DiscoveryEngineDataConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataConnectorActionConfigOutputReference <a name="DiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorActionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineDataConnectorActionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">ResetActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">ResetCreateBapConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionParams` <a name="ResetActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```go
func ResetActionParams()
```

##### `ResetCreateBapConnection` <a name="ResetCreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```go
func ResetCreateBapConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">IsActionConfigured</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">ActionParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">CreateBapConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">ActionParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">CreateBapConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsActionConfigured`<sup>Required</sup> <a name="IsActionConfigured" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```go
func IsActionConfigured() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ActionParamsInput`<sup>Optional</sup> <a name="ActionParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```go
func ActionParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateBapConnectionInput`<sup>Optional</sup> <a name="CreateBapConnectionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```go
func CreateBapConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```go
func ActionParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateBapConnection`<sup>Required</sup> <a name="CreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```go
func CreateBapConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---


### DiscoveryEngineDataConnectorBapConfigOutputReference <a name="DiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorBapConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineDataConnectorBapConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">ResetEnabledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">ResetSupportedConnectorModes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledActions` <a name="ResetEnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```go
func ResetEnabledActions()
```

##### `ResetSupportedConnectorModes` <a name="ResetSupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```go
func ResetSupportedConnectorModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">EnabledActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">SupportedConnectorModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">EnabledActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledActionsInput`<sup>Optional</sup> <a name="EnabledActionsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```go
func EnabledActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedConnectorModesInput`<sup>Optional</sup> <a name="SupportedConnectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```go
func SupportedConnectorModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledActions`<sup>Required</sup> <a name="EnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```go
func EnabledActions() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedConnectorModes`<sup>Required</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```go
func SupportedConnectorModes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorDestinationConfigsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineDataConnectorDestinationConfigsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```go
func Get(index *f64) DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineDataConnectorDestinationConfigsList <a name="DiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorDestinationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineDataConnectorDestinationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```go
func Get(index *f64) DiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorDestinationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```go
func ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">Params</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```go
func Destinations() DiscoveryEngineDataConnectorDestinationConfigsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```go
func Params() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineDataConnectorEntitiesList <a name="DiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorEntitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineDataConnectorEntitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get"></a>

```go
func Get(index *f64) DiscoveryEngineDataConnectorEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineDataConnectorEntitiesOutputReference <a name="DiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineDataConnectorEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">ResetKeyPropertyMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```go
func ResetEntityName()
```

##### `ResetKeyPropertyMappings` <a name="ResetKeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```go
func ResetKeyPropertyMappings()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```go
func ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">DataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">KeyPropertyMappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params">Params</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```go
func DataStore() *string
```

- *Type:* *string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```go
func EntityNameInput() *string
```

- *Type:* *string

---

##### `KeyPropertyMappingsInput`<sup>Optional</sup> <a name="KeyPropertyMappingsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```go
func KeyPropertyMappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *string
```

- *Type:* *string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```go
func EntityName() *string
```

- *Type:* *string

---

##### `KeyPropertyMappings`<sup>Required</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```go
func KeyPropertyMappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```go
func Params() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineDataConnectorErrorsList <a name="DiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineDataConnectorErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get"></a>

```go
func Get(index *f64) DiscoveryEngineDataConnectorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DiscoveryEngineDataConnectorErrorsOutputReference <a name="DiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineDataConnectorErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineDataConnectorErrors
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a>

---


### DiscoveryEngineDataConnectorTimeoutsOutputReference <a name="DiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginedataconnector"

discoveryenginedataconnector.NewDiscoveryEngineDataConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineDataConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



