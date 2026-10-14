# `geminiDataAnalyticsDataAgentIamPolicy` Submodule <a name="`geminiDataAnalyticsDataAgentIamPolicy` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgentIamPolicy <a name="GeminiDataAnalyticsDataAgentIamPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy google_gemini_data_analytics_data_agent_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagentiampolicy"

geminidataanalyticsdataagentiampolicy.NewGeminiDataAnalyticsDataAgentIamPolicy(scope Construct, id *string, config GeminiDataAnalyticsDataAgentIamPolicyConfig) GeminiDataAnalyticsDataAgentIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig">GeminiDataAnalyticsDataAgentIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig">GeminiDataAnalyticsDataAgentIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgentIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagentiampolicy"

geminidataanalyticsdataagentiampolicy.GeminiDataAnalyticsDataAgentIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagentiampolicy"

geminidataanalyticsdataagentiampolicy.GeminiDataAnalyticsDataAgentIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagentiampolicy"

geminidataanalyticsdataagentiampolicy.GeminiDataAnalyticsDataAgentIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagentiampolicy"

geminidataanalyticsdataagentiampolicy.GeminiDataAnalyticsDataAgentIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgentIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiDataAnalyticsDataAgentIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiDataAnalyticsDataAgentIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgentIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentIdInput">DataAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentId">DataAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `DataAgentIdInput`<sup>Optional</sup> <a name="DataAgentIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentIdInput"></a>

```go
func DataAgentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.dataAgentId"></a>

```go
func DataAgentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentIamPolicyConfig <a name="GeminiDataAnalyticsDataAgentIamPolicyConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagentiampolicy"

&geminidataanalyticsdataagentiampolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataAgentId: *string,
	PolicyData: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.dataAgentId">DataAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#data_agent_id GeminiDataAnalyticsDataAgentIamPolicy#data_agent_id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#policy_data GeminiDataAnalyticsDataAgentIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#id GeminiDataAnalyticsDataAgentIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#location GeminiDataAnalyticsDataAgentIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#project GeminiDataAnalyticsDataAgentIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.dataAgentId"></a>

```go
DataAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#data_agent_id GeminiDataAnalyticsDataAgentIamPolicy#data_agent_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#policy_data GeminiDataAnalyticsDataAgentIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#id GeminiDataAnalyticsDataAgentIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#location GeminiDataAnalyticsDataAgentIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamPolicy.GeminiDataAnalyticsDataAgentIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_policy#project GeminiDataAnalyticsDataAgentIamPolicy#project}.

---



