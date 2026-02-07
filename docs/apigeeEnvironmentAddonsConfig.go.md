# `apigeeEnvironmentAddonsConfig` Submodule <a name="`apigeeEnvironmentAddonsConfig` Submodule" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentAddonsConfig <a name="ApigeeEnvironmentAddonsConfig" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config google_apigee_environment_addons_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

apigeeenvironmentaddonsconfig.NewApigeeEnvironmentAddonsConfig(scope Construct, id *string, config ApigeeEnvironmentAddonsConfigConfig) ApigeeEnvironmentAddonsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig">ApigeeEnvironmentAddonsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig">ApigeeEnvironmentAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled">ResetAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeEnvironmentAddonsConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

---

##### `ResetAnalyticsEnabled` <a name="ResetAnalyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled"></a>

```go
func ResetAnalyticsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

apigeeenvironmentaddonsconfig.ApigeeEnvironmentAddonsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

apigeeenvironmentaddonsconfig.ApigeeEnvironmentAddonsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

apigeeenvironmentaddonsconfig.ApigeeEnvironmentAddonsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

apigeeenvironmentaddonsconfig.ApigeeEnvironmentAddonsConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeEnvironmentAddonsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeEnvironmentAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference">ApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput">AnalyticsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabled">AnalyticsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeouts"></a>

```go
func Timeouts() ApigeeEnvironmentAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference">ApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a>

---

##### `AnalyticsEnabledInput`<sup>Optional</sup> <a name="AnalyticsEnabledInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput"></a>

```go
func AnalyticsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsEnabled`<sup>Required</sup> <a name="AnalyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.analyticsEnabled"></a>

```go
func AnalyticsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentAddonsConfigConfig <a name="ApigeeEnvironmentAddonsConfigConfig" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

&apigeeenvironmentaddonsconfig.ApigeeEnvironmentAddonsConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvId: *string,
	AnalyticsEnabled: interface{},
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.envId">EnvId</a></code> | <code>*string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled">AnalyticsEnabled</a></code> | <code>interface{}</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#env_id ApigeeEnvironmentAddonsConfig#env_id}

---

##### `AnalyticsEnabled`<sup>Optional</sup> <a name="AnalyticsEnabled" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled"></a>

```go
AnalyticsEnabled interface{}
```

- *Type:* interface{}

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#analytics_enabled ApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#id ApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigConfig.property.timeouts"></a>

```go
Timeouts ApigeeEnvironmentAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts">ApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#timeouts ApigeeEnvironmentAddonsConfig#timeouts}

---

### ApigeeEnvironmentAddonsConfigTimeouts <a name="ApigeeEnvironmentAddonsConfigTimeouts" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

&apigeeenvironmentaddonsconfig.ApigeeEnvironmentAddonsConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#create ApigeeEnvironmentAddonsConfig#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#delete ApigeeEnvironmentAddonsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#update ApigeeEnvironmentAddonsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#create ApigeeEnvironmentAddonsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#delete ApigeeEnvironmentAddonsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_environment_addons_config#update ApigeeEnvironmentAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentAddonsConfigTimeoutsOutputReference <a name="ApigeeEnvironmentAddonsConfigTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/apigeeenvironmentaddonsconfig"

apigeeenvironmentaddonsconfig.NewApigeeEnvironmentAddonsConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentAddonsConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeEnvironmentAddonsConfig.ApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



