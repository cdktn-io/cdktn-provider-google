# `chronicleParserExtension` Submodule <a name="`chronicleParserExtension` Submodule" id="@cdktn/provider-google.chronicleParserExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParserExtension <a name="ChronicleParserExtension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtension(scope Construct, id *string, config ChronicleParserExtensionConfig) ChronicleParserExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig">ChronicleParserExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig">ChronicleParserExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing">PutDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors">PutFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet">ResetCbnSnippet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing">ResetDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors">ResetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog">ResetLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped">ResetValidationSkipped</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDynamicParsing` <a name="PutDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing"></a>

```go
func PutDynamicParsing(value ChronicleParserExtensionDynamicParsing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `PutFieldExtractors` <a name="PutFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors"></a>

```go
func PutFieldExtractors(value ChronicleParserExtensionFieldExtractors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleParserExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `ResetCbnSnippet` <a name="ResetCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet"></a>

```go
func ResetCbnSnippet()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDynamicParsing` <a name="ResetDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing"></a>

```go
func ResetDynamicParsing()
```

##### `ResetFieldExtractors` <a name="ResetFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors"></a>

```go
func ResetFieldExtractors()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetLog` <a name="ResetLog" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog"></a>

```go
func ResetLog()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValidationSkipped` <a name="ResetValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped"></a>

```go
func ResetValidationSkipped()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.ChronicleParserExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.ChronicleParserExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.ChronicleParserExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.ChronicleParserExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleParserExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleParserExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParserExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing">DynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport">ExtensionValidationReport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors">FieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime">LastLiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension">Parserextension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime">StateLastChangedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport">ValidationReport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput">CbnSnippetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput">DynamicParsingInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput">FieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput">LogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput">ValidationSkippedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet">CbnSnippet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log">Log</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped">ValidationSkipped</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DynamicParsing`<sup>Required</sup> <a name="DynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing"></a>

```go
func DynamicParsing() ChronicleParserExtensionDynamicParsingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a>

---

##### `ExtensionValidationReport`<sup>Required</sup> <a name="ExtensionValidationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport"></a>

```go
func ExtensionValidationReport() *string
```

- *Type:* *string

---

##### `FieldExtractors`<sup>Required</sup> <a name="FieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors"></a>

```go
func FieldExtractors() ChronicleParserExtensionFieldExtractorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a>

---

##### `LastLiveTime`<sup>Required</sup> <a name="LastLiveTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime"></a>

```go
func LastLiveTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parserextension`<sup>Required</sup> <a name="Parserextension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension"></a>

```go
func Parserextension() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateLastChangedTime`<sup>Required</sup> <a name="StateLastChangedTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime"></a>

```go
func StateLastChangedTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts"></a>

```go
func Timeouts() ChronicleParserExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a>

---

##### `ValidationReport`<sup>Required</sup> <a name="ValidationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport"></a>

```go
func ValidationReport() *string
```

- *Type:* *string

---

##### `CbnSnippetInput`<sup>Optional</sup> <a name="CbnSnippetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput"></a>

```go
func CbnSnippetInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DynamicParsingInput`<sup>Optional</sup> <a name="DynamicParsingInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput"></a>

```go
func DynamicParsingInput() ChronicleParserExtensionDynamicParsing
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `FieldExtractorsInput`<sup>Optional</sup> <a name="FieldExtractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput"></a>

```go
func FieldExtractorsInput() ChronicleParserExtensionFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogInput`<sup>Optional</sup> <a name="LogInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput"></a>

```go
func LogInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationSkippedInput`<sup>Optional</sup> <a name="ValidationSkippedInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput"></a>

```go
func ValidationSkippedInput() interface{}
```

- *Type:* interface{}

---

##### `CbnSnippet`<sup>Required</sup> <a name="CbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet"></a>

```go
func CbnSnippet() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Log`<sup>Required</sup> <a name="Log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log"></a>

```go
func Log() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ValidationSkipped`<sup>Required</sup> <a name="ValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped"></a>

```go
func ValidationSkipped() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserExtensionConfig <a name="ChronicleParserExtensionConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Location: *string,
	LogType: *string,
	CbnSnippet: *string,
	DeletionPolicy: *string,
	DynamicParsing: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleParserExtension.ChronicleParserExtensionDynamicParsing,
	FieldExtractors: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleParserExtension.ChronicleParserExtensionFieldExtractors,
	Id: *string,
	Log: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleParserExtension.ChronicleParserExtensionTimeouts,
	ValidationSkipped: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance">Instance</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType">LogType</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet">CbnSnippet</a></code> | <code>*string</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing">DynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors">FieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log">Log</a></code> | <code>*string</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped">ValidationSkipped</a></code> | <code>interface{}</code> | Flag to bypass parser extension validation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `CbnSnippet`<sup>Optional</sup> <a name="CbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet"></a>

```go
CbnSnippet *string
```

- *Type:* *string

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `DynamicParsing`<sup>Optional</sup> <a name="DynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing"></a>

```go
DynamicParsing ChronicleParserExtensionDynamicParsing
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `FieldExtractors`<sup>Optional</sup> <a name="FieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors"></a>

```go
FieldExtractors ChronicleParserExtensionFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Log`<sup>Optional</sup> <a name="Log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log"></a>

```go
Log *string
```

- *Type:* *string

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts"></a>

```go
Timeouts ChronicleParserExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `ValidationSkipped`<sup>Optional</sup> <a name="ValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped"></a>

```go
ValidationSkipped interface{}
```

- *Type:* interface{}

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

### ChronicleParserExtensionDynamicParsing <a name="ChronicleParserExtensionDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionDynamicParsing {
	OptedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields">OptedFields</a></code> | <code>interface{}</code> | opted_fields block. |

---

##### `OptedFields`<sup>Optional</sup> <a name="OptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields"></a>

```go
OptedFields interface{}
```

- *Type:* interface{}

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}

---

### ChronicleParserExtensionDynamicParsingOptedFields <a name="ChronicleParserExtensionDynamicParsingOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionDynamicParsingOptedFields {
	Path: *string,
	SampleValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path">Path</a></code> | <code>*string</code> | Path of the log field. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue">SampleValue</a></code> | <code>*string</code> | Sample value of the log field. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#path ChronicleParserExtension#path}

---

##### `SampleValue`<sup>Optional</sup> <a name="SampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue"></a>

```go
SampleValue *string
```

- *Type:* *string

Sample value of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#sample_value ChronicleParserExtension#sample_value}

---

### ChronicleParserExtensionFieldExtractors <a name="ChronicleParserExtensionFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionFieldExtractors {
	AppendRepeatedFields: interface{},
	Extractors: interface{},
	LogFormat: *string,
	PreprocessConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields">AppendRepeatedFields</a></code> | <code>interface{}</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors">Extractors</a></code> | <code>interface{}</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat">LogFormat</a></code> | <code>*string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig">PreprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `AppendRepeatedFields`<sup>Optional</sup> <a name="AppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields"></a>

```go
AppendRepeatedFields interface{}
```

- *Type:* interface{}

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}

---

##### `Extractors`<sup>Optional</sup> <a name="Extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors"></a>

```go
Extractors interface{}
```

- *Type:* interface{}

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}

---

##### `PreprocessConfig`<sup>Optional</sup> <a name="PreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig"></a>

```go
PreprocessConfig ChronicleParserExtensionFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}

---

### ChronicleParserExtensionFieldExtractorsExtractors <a name="ChronicleParserExtensionFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionFieldExtractorsExtractors {
	DestinationPath: *string,
	FieldPath: *string,
	PreconditionOp: *string,
	PreconditionPath: *string,
	PreconditionValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath">FieldPath</a></code> | <code>*string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp">PreconditionOp</a></code> | <code>*string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath">PreconditionPath</a></code> | <code>*string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue">PreconditionValue</a></code> | <code>*string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value">Value</a></code> | <code>*string</code> | Value to be mapped to the destination path directly. |

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#destination_path ChronicleParserExtension#destination_path}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#field_path ChronicleParserExtension#field_path}

---

##### `PreconditionOp`<sup>Optional</sup> <a name="PreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp"></a>

```go
PreconditionOp *string
```

- *Type:* *string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#precondition_op ChronicleParserExtension#precondition_op}

---

##### `PreconditionPath`<sup>Optional</sup> <a name="PreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath"></a>

```go
PreconditionPath *string
```

- *Type:* *string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#precondition_path ChronicleParserExtension#precondition_path}

---

##### `PreconditionValue`<sup>Optional</sup> <a name="PreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue"></a>

```go
PreconditionValue *string
```

- *Type:* *string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#precondition_value ChronicleParserExtension#precondition_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#value ChronicleParserExtension#value}

---

### ChronicleParserExtensionFieldExtractorsPreprocessConfig <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionFieldExtractorsPreprocessConfig {
	GrokRegex: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex">GrokRegex</a></code> | <code>*string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target">Target</a></code> | <code>*string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `GrokRegex`<sup>Optional</sup> <a name="GrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```go
GrokRegex *string
```

- *Type:* *string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}

---

### ChronicleParserExtensionTimeouts <a name="ChronicleParserExtensionTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

&chronicleparserextension.ChronicleParserExtensionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserExtensionDynamicParsingOptedFieldsList <a name="ChronicleParserExtensionDynamicParsingOptedFieldsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionDynamicParsingOptedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleParserExtensionDynamicParsingOptedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get"></a>

```go
func Get(index *f64) ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference <a name="ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue">ResetSampleValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSampleValue` <a name="ResetSampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue"></a>

```go
func ResetSampleValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput">SampleValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue">SampleValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SampleValueInput`<sup>Optional</sup> <a name="SampleValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput"></a>

```go
func SampleValueInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SampleValue`<sup>Required</sup> <a name="SampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue"></a>

```go
func SampleValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleParserExtensionDynamicParsingOutputReference <a name="ChronicleParserExtensionDynamicParsingOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionDynamicParsingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleParserExtensionDynamicParsingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields">PutOptedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields">ResetOptedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptedFields` <a name="PutOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields"></a>

```go
func PutOptedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOptedFields` <a name="ResetOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields"></a>

```go
func ResetOptedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields">OptedFields</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput">OptedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptedFields`<sup>Required</sup> <a name="OptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields"></a>

```go
func OptedFields() ChronicleParserExtensionDynamicParsingOptedFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a>

---

##### `OptedFieldsInput`<sup>Optional</sup> <a name="OptedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput"></a>

```go
func OptedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleParserExtensionDynamicParsing
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---


### ChronicleParserExtensionFieldExtractorsExtractorsList <a name="ChronicleParserExtensionFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionFieldExtractorsExtractorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleParserExtensionFieldExtractorsExtractorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get"></a>

```go
func Get(index *f64) ChronicleParserExtensionFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleParserExtensionFieldExtractorsExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionFieldExtractorsExtractorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleParserExtensionFieldExtractorsExtractorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp">ResetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath">ResetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue">ResetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```go
func ResetDestinationPath()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```

##### `ResetPreconditionOp` <a name="ResetPreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```go
func ResetPreconditionOp()
```

##### `ResetPreconditionPath` <a name="ResetPreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```go
func ResetPreconditionPath()
```

##### `ResetPreconditionValue` <a name="ResetPreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```go
func ResetPreconditionValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">PreconditionOpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">PreconditionPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">PreconditionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp">PreconditionOp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath">PreconditionPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue">PreconditionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `PreconditionOpInput`<sup>Optional</sup> <a name="PreconditionOpInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```go
func PreconditionOpInput() *string
```

- *Type:* *string

---

##### `PreconditionPathInput`<sup>Optional</sup> <a name="PreconditionPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```go
func PreconditionPathInput() *string
```

- *Type:* *string

---

##### `PreconditionValueInput`<sup>Optional</sup> <a name="PreconditionValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```go
func PreconditionValueInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `PreconditionOp`<sup>Required</sup> <a name="PreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```go
func PreconditionOp() *string
```

- *Type:* *string

---

##### `PreconditionPath`<sup>Required</sup> <a name="PreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```go
func PreconditionPath() *string
```

- *Type:* *string

---

##### `PreconditionValue`<sup>Required</sup> <a name="PreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```go
func PreconditionValue() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleParserExtensionFieldExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionFieldExtractorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleParserExtensionFieldExtractorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors">PutExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig">PutPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields">ResetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors">ResetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig">ResetPreprocessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtractors` <a name="PutExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors"></a>

```go
func PutExtractors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPreprocessConfig` <a name="PutPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig"></a>

```go
func PutPreprocessConfig(value ChronicleParserExtensionFieldExtractorsPreprocessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `ResetAppendRepeatedFields` <a name="ResetAppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```go
func ResetAppendRepeatedFields()
```

##### `ResetExtractors` <a name="ResetExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors"></a>

```go
func ResetExtractors()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat"></a>

```go
func ResetLogFormat()
```

##### `ResetPreprocessConfig` <a name="ResetPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```go
func ResetPreprocessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors">Extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig">PreprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet">TransformedCbnSnippet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">AppendRepeatedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput">ExtractorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput">PreprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields">AppendRepeatedFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extractors`<sup>Required</sup> <a name="Extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors"></a>

```go
func Extractors() ChronicleParserExtensionFieldExtractorsExtractorsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a>

---

##### `PreprocessConfig`<sup>Required</sup> <a name="PreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig"></a>

```go
func PreprocessConfig() ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `TransformedCbnSnippet`<sup>Required</sup> <a name="TransformedCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```go
func TransformedCbnSnippet() *string
```

- *Type:* *string

---

##### `AppendRepeatedFieldsInput`<sup>Optional</sup> <a name="AppendRepeatedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```go
func AppendRepeatedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ExtractorsInput`<sup>Optional</sup> <a name="ExtractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput"></a>

```go
func ExtractorsInput() interface{}
```

- *Type:* interface{}

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `PreprocessConfigInput`<sup>Optional</sup> <a name="PreprocessConfigInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```go
func PreprocessConfigInput() ChronicleParserExtensionFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `AppendRepeatedFields`<sup>Required</sup> <a name="AppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```go
func AppendRepeatedFields() interface{}
```

- *Type:* interface{}

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleParserExtensionFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">ResetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrokRegex` <a name="ResetGrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```go
func ResetGrokRegex()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">GrokRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">GrokRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrokRegexInput`<sup>Optional</sup> <a name="GrokRegexInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```go
func GrokRegexInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `GrokRegex`<sup>Required</sup> <a name="GrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```go
func GrokRegex() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleParserExtensionFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserExtensionTimeoutsOutputReference <a name="ChronicleParserExtensionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chronicleparserextension"

chronicleparserextension.NewChronicleParserExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleParserExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



