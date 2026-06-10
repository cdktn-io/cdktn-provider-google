# `discoveryEngineAclConfig` Submodule <a name="`discoveryEngineAclConfig` Submodule" id="@cdktn/provider-google.discoveryEngineAclConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineAclConfig <a name="DiscoveryEngineAclConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config google_discovery_engine_acl_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.NewDiscoveryEngineAclConfig(scope Construct, id *string, config DiscoveryEngineAclConfigConfig) DiscoveryEngineAclConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig">DiscoveryEngineAclConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig">DiscoveryEngineAclConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetIdpConfig">ResetIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putIdpConfig"></a>

```go
func PutIdpConfig(value DiscoveryEngineAclConfigIdpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineAclConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIdpConfig` <a name="ResetIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetIdpConfig"></a>

```go
func ResetIdpConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.DiscoveryEngineAclConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.DiscoveryEngineAclConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.DiscoveryEngineAclConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.DiscoveryEngineAclConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineAclConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineAclConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineAclConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference">DiscoveryEngineAclConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfig"></a>

```go
func IdpConfig() DiscoveryEngineAclConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineAclConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference">DiscoveryEngineAclConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfigInput"></a>

```go
func IdpConfigInput() DiscoveryEngineAclConfigIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineAclConfigConfig <a name="DiscoveryEngineAclConfigConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

&discoveryengineaclconfig.DiscoveryEngineAclConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	IdpConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#location DiscoveryEngineAclConfig#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpConfig`<sup>Optional</sup> <a name="IdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.idpConfig"></a>

```go
IdpConfig DiscoveryEngineAclConfigIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#idp_config DiscoveryEngineAclConfig#idp_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineAclConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#timeouts DiscoveryEngineAclConfig#timeouts}

---

### DiscoveryEngineAclConfigIdpConfig <a name="DiscoveryEngineAclConfigIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

&discoveryengineaclconfig.DiscoveryEngineAclConfigIdpConfig {
	ExternalIdpConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig,
	IdpType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig">ExternalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | external_idp_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.idpType">IdpType</a></code> | <code>*string</code> | Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"]. |

---

##### `ExternalIdpConfig`<sup>Optional</sup> <a name="ExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig"></a>

```go
ExternalIdpConfig DiscoveryEngineAclConfigIdpConfigExternalIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

external_idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#external_idp_config DiscoveryEngineAclConfig#external_idp_config}

---

##### `IdpType`<sup>Optional</sup> <a name="IdpType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.idpType"></a>

```go
IdpType *string
```

- *Type:* *string

Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#idp_type DiscoveryEngineAclConfig#idp_type}

---

### DiscoveryEngineAclConfigIdpConfigExternalIdpConfig <a name="DiscoveryEngineAclConfigIdpConfigExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

&discoveryengineaclconfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig {
	WorkforcePoolName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName">WorkforcePoolName</a></code> | <code>*string</code> | Workforce pool name: "locations/global/workforcePools/pool_id". |

---

##### `WorkforcePoolName`<sup>Optional</sup> <a name="WorkforcePoolName" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName"></a>

```go
WorkforcePoolName *string
```

- *Type:* *string

Workforce pool name: "locations/global/workforcePools/pool_id".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#workforce_pool_name DiscoveryEngineAclConfig#workforce_pool_name}

---

### DiscoveryEngineAclConfigTimeouts <a name="DiscoveryEngineAclConfigTimeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

&discoveryengineaclconfig.DiscoveryEngineAclConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#create DiscoveryEngineAclConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#delete DiscoveryEngineAclConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#update DiscoveryEngineAclConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#create DiscoveryEngineAclConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#delete DiscoveryEngineAclConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_acl_config#update DiscoveryEngineAclConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference <a name="DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.NewDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName">ResetWorkforcePoolName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkforcePoolName` <a name="ResetWorkforcePoolName" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName"></a>

```go
func ResetWorkforcePoolName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput">WorkforcePoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName">WorkforcePoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkforcePoolNameInput`<sup>Optional</sup> <a name="WorkforcePoolNameInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput"></a>

```go
func WorkforcePoolNameInput() *string
```

- *Type:* *string

---

##### `WorkforcePoolName`<sup>Required</sup> <a name="WorkforcePoolName" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName"></a>

```go
func WorkforcePoolName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineAclConfigIdpConfigExternalIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---


### DiscoveryEngineAclConfigIdpConfigOutputReference <a name="DiscoveryEngineAclConfigIdpConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.NewDiscoveryEngineAclConfigIdpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineAclConfigIdpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig">PutExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig">ResetExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType">ResetIdpType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalIdpConfig` <a name="PutExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig"></a>

```go
func PutExternalIdpConfig(value DiscoveryEngineAclConfigIdpConfigExternalIdpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `ResetExternalIdpConfig` <a name="ResetExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig"></a>

```go
func ResetExternalIdpConfig()
```

##### `ResetIdpType` <a name="ResetIdpType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType"></a>

```go
func ResetIdpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig">ExternalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput">ExternalIdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput">IdpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType">IdpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdpConfig`<sup>Required</sup> <a name="ExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig"></a>

```go
func ExternalIdpConfig() DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a>

---

##### `ExternalIdpConfigInput`<sup>Optional</sup> <a name="ExternalIdpConfigInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput"></a>

```go
func ExternalIdpConfigInput() DiscoveryEngineAclConfigIdpConfigExternalIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `IdpTypeInput`<sup>Optional</sup> <a name="IdpTypeInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput"></a>

```go
func IdpTypeInput() *string
```

- *Type:* *string

---

##### `IdpType`<sup>Required</sup> <a name="IdpType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType"></a>

```go
func IdpType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineAclConfigIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

---


### DiscoveryEngineAclConfigTimeoutsOutputReference <a name="DiscoveryEngineAclConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryengineaclconfig"

discoveryengineaclconfig.NewDiscoveryEngineAclConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineAclConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



