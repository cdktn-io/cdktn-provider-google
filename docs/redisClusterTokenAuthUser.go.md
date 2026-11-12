# `redisClusterTokenAuthUser` Submodule <a name="`redisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google.redisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterTokenAuthUser <a name="RedisClusterTokenAuthUser" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

redisclustertokenauthuser.NewRedisClusterTokenAuthUser(scope Construct, id *string, config RedisClusterTokenAuthUserConfig) RedisClusterTokenAuthUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig">RedisClusterTokenAuthUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig">RedisClusterTokenAuthUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts"></a>

```go
func PutTimeouts(value RedisClusterTokenAuthUserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

redisclustertokenauthuser.RedisClusterTokenAuthUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

redisclustertokenauthuser.RedisClusterTokenAuthUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

redisclustertokenauthuser.RedisClusterTokenAuthUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

redisclustertokenauthuser.RedisClusterTokenAuthUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedisClusterTokenAuthUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts"></a>

```go
func Timeouts() RedisClusterTokenAuthUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterTokenAuthUserConfig <a name="RedisClusterTokenAuthUserConfig" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

&redisclustertokenauthuser.RedisClusterTokenAuthUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	UserId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId">UserId</a></code> | <code>*string</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region">Region</a></code> | <code>*string</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts"></a>

```go
Timeouts RedisClusterTokenAuthUserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

### RedisClusterTokenAuthUserTimeouts <a name="RedisClusterTokenAuthUserTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

&redisclustertokenauthuser.RedisClusterTokenAuthUserTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterTokenAuthUserTimeoutsOutputReference <a name="RedisClusterTokenAuthUserTimeoutsOutputReference" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/redisclustertokenauthuser"

redisclustertokenauthuser.NewRedisClusterTokenAuthUserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisClusterTokenAuthUserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



