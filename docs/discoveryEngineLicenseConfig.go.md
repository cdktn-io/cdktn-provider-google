# `discoveryEngineLicenseConfig` Submodule <a name="`discoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google.discoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineLicenseConfig <a name="DiscoveryEngineLicenseConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.NewDiscoveryEngineLicenseConfig(scope Construct, id *string, config DiscoveryEngineLicenseConfigConfig) DiscoveryEngineLicenseConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig">DiscoveryEngineLicenseConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig">DiscoveryEngineLicenseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial">ResetFreeTrial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndDate` <a name="PutEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate"></a>

```go
func PutEndDate(value DiscoveryEngineLicenseConfigEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate"></a>

```go
func PutStartDate(value DiscoveryEngineLicenseConfigStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineLicenseConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```go
func ResetAutoRenew()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetFreeTrial` <a name="ResetFreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```go
func ResetFreeTrial()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.DiscoveryEngineLicenseConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.DiscoveryEngineLicenseConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.DiscoveryEngineLicenseConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.DiscoveryEngineLicenseConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineLicenseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput">AutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput">FreeTrialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput">LicenseConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput">LicenseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput">SubscriptionTermInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput">SubscriptionTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial">FreeTrial</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId">LicenseConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount">LicenseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm">SubscriptionTerm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier">SubscriptionTier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate"></a>

```go
func EndDate() DiscoveryEngineLicenseConfigEndDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate"></a>

```go
func StartDate() DiscoveryEngineLicenseConfigStartDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineLicenseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```go
func AutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput"></a>

```go
func EndDateInput() DiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `FreeTrialInput`<sup>Optional</sup> <a name="FreeTrialInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```go
func FreeTrialInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseConfigIdInput`<sup>Optional</sup> <a name="LicenseConfigIdInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```go
func LicenseConfigIdInput() *string
```

- *Type:* *string

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```go
func LicenseCountInput() *f64
```

- *Type:* *f64

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput"></a>

```go
func StartDateInput() DiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `SubscriptionTermInput`<sup>Optional</sup> <a name="SubscriptionTermInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```go
func SubscriptionTermInput() *string
```

- *Type:* *string

---

##### `SubscriptionTierInput`<sup>Optional</sup> <a name="SubscriptionTierInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```go
func SubscriptionTierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew"></a>

```go
func AutoRenew() interface{}
```

- *Type:* interface{}

---

##### `FreeTrial`<sup>Required</sup> <a name="FreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial"></a>

```go
func FreeTrial() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseConfigId`<sup>Required</sup> <a name="LicenseConfigId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```go
func LicenseConfigId() *string
```

- *Type:* *string

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount"></a>

```go
func LicenseCount() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SubscriptionTerm`<sup>Required</sup> <a name="SubscriptionTerm" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```go
func SubscriptionTerm() *string
```

- *Type:* *string

---

##### `SubscriptionTier`<sup>Required</sup> <a name="SubscriptionTier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```go
func SubscriptionTier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineLicenseConfigConfig <a name="DiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

&discoveryenginelicenseconfig.DiscoveryEngineLicenseConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LicenseConfigId: *string,
	LicenseCount: *f64,
	Location: *string,
	StartDate: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate,
	SubscriptionTerm: *string,
	SubscriptionTier: *string,
	AutoRenew: interface{},
	EndDate: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate,
	FreeTrial: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId">LicenseConfigId</a></code> | <code>*string</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount">LicenseCount</a></code> | <code>*f64</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">SubscriptionTerm</a></code> | <code>*string</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier">SubscriptionTier</a></code> | <code>*string</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial">FreeTrial</a></code> | <code>interface{}</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LicenseConfigId`<sup>Required</sup> <a name="LicenseConfigId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```go
LicenseConfigId *string
```

- *Type:* *string

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#license_config_id DiscoveryEngineLicenseConfig#license_config_id}

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```go
LicenseCount *f64
```

- *Type:* *f64

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#license_count DiscoveryEngineLicenseConfig#license_count}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#location DiscoveryEngineLicenseConfig#location}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```go
StartDate DiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#start_date DiscoveryEngineLicenseConfig#start_date}

---

##### `SubscriptionTerm`<sup>Required</sup> <a name="SubscriptionTerm" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```go
SubscriptionTerm *string
```

- *Type:* *string

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#subscription_term DiscoveryEngineLicenseConfig#subscription_term}

---

##### `SubscriptionTier`<sup>Required</sup> <a name="SubscriptionTier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```go
SubscriptionTier *string
```

- *Type:* *string

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#subscription_tier DiscoveryEngineLicenseConfig#subscription_tier}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```go
AutoRenew interface{}
```

- *Type:* interface{}

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#auto_renew DiscoveryEngineLicenseConfig#auto_renew}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```go
EndDate DiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#end_date DiscoveryEngineLicenseConfig#end_date}

---

##### `FreeTrial`<sup>Optional</sup> <a name="FreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```go
FreeTrial interface{}
```

- *Type:* interface{}

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#free_trial DiscoveryEngineLicenseConfig#free_trial}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineLicenseConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#timeouts DiscoveryEngineLicenseConfig#timeouts}

---

### DiscoveryEngineLicenseConfigEndDate <a name="DiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

&discoveryenginelicenseconfig.DiscoveryEngineLicenseConfigEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigStartDate <a name="DiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

&discoveryenginelicenseconfig.DiscoveryEngineLicenseConfigStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigTimeouts <a name="DiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

&discoveryenginelicenseconfig.DiscoveryEngineLicenseConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineLicenseConfigEndDateOutputReference <a name="DiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.NewDiscoveryEngineLicenseConfigEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineLicenseConfigEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---


### DiscoveryEngineLicenseConfigStartDateOutputReference <a name="DiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.NewDiscoveryEngineLicenseConfigStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineLicenseConfigStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---


### DiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="DiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginelicenseconfig"

discoveryenginelicenseconfig.NewDiscoveryEngineLicenseConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineLicenseConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



