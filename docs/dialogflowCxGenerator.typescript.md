# `dialogflowCxGenerator` Submodule <a name="`dialogflowCxGenerator` Submodule" id="@cdktn/provider-google.dialogflowCxGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxGenerator <a name="DialogflowCxGenerator" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator google_dialogflow_cx_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGenerator(scope: Construct, id: string, config: DialogflowCxGeneratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig">DialogflowCxGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig">DialogflowCxGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter">putModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders">putPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText">putPromptText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetModelParameter">resetModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetPlaceholders">resetPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings"></a>

```typescript
public putLlmModelSettings(value: DialogflowCxGeneratorLlmModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---

##### `putModelParameter` <a name="putModelParameter" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter"></a>

```typescript
public putModelParameter(value: DialogflowCxGeneratorModelParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---

##### `putPlaceholders` <a name="putPlaceholders" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders"></a>

```typescript
public putPlaceholders(value: IResolvable | DialogflowCxGeneratorPlaceholders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]

---

##### `putPromptText` <a name="putPromptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText"></a>

```typescript
public putPromptText(value: DialogflowCxGeneratorPromptText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxGeneratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLlmModelSettings"></a>

```typescript
public resetLlmModelSettings(): void
```

##### `resetModelParameter` <a name="resetModelParameter" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetModelParameter"></a>

```typescript
public resetModelParameter(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetPlaceholders` <a name="resetPlaceholders" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetPlaceholders"></a>

```typescript
public resetPlaceholders(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowCxGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

dialogflowCxGenerator.DialogflowCxGenerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DialogflowCxGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowCxGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference">DialogflowCxGeneratorLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameter">modelParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference">DialogflowCxGeneratorModelParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholders">placeholders</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList">DialogflowCxGeneratorPlaceholdersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptText">promptText</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference">DialogflowCxGeneratorPromptTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference">DialogflowCxGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameterInput">modelParameterInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholdersInput">placeholdersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptTextInput">promptTextInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: DialogflowCxGeneratorLlmModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference">DialogflowCxGeneratorLlmModelSettingsOutputReference</a>

---

##### `modelParameter`<sup>Required</sup> <a name="modelParameter" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameter"></a>

```typescript
public readonly modelParameter: DialogflowCxGeneratorModelParameterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference">DialogflowCxGeneratorModelParameterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `placeholders`<sup>Required</sup> <a name="placeholders" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholders"></a>

```typescript
public readonly placeholders: DialogflowCxGeneratorPlaceholdersList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList">DialogflowCxGeneratorPlaceholdersList</a>

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptText"></a>

```typescript
public readonly promptText: DialogflowCxGeneratorPromptTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference">DialogflowCxGeneratorPromptTextOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxGeneratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference">DialogflowCxGeneratorTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettingsInput"></a>

```typescript
public readonly llmModelSettingsInput: DialogflowCxGeneratorLlmModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---

##### `modelParameterInput`<sup>Optional</sup> <a name="modelParameterInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameterInput"></a>

```typescript
public readonly modelParameterInput: DialogflowCxGeneratorModelParameter;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `placeholdersInput`<sup>Optional</sup> <a name="placeholdersInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholdersInput"></a>

```typescript
public readonly placeholdersInput: IResolvable | DialogflowCxGeneratorPlaceholders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: DialogflowCxGeneratorPromptText;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxGeneratorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxGeneratorConfig <a name="DialogflowCxGeneratorConfig" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

const dialogflowCxGeneratorConfig: dialogflowCxGenerator.DialogflowCxGeneratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.promptText">promptText</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.modelParameter">modelParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.placeholders">placeholders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]</code> | placeholders block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#display_name DialogflowCxGenerator#display_name}

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.promptText"></a>

```typescript
public readonly promptText: DialogflowCxGeneratorPromptText;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#deletion_policy DialogflowCxGenerator#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#language_code DialogflowCxGenerator#language_code}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: DialogflowCxGeneratorLlmModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#llm_model_settings DialogflowCxGenerator#llm_model_settings}

---

##### `modelParameter`<sup>Optional</sup> <a name="modelParameter" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.modelParameter"></a>

```typescript
public readonly modelParameter: DialogflowCxGeneratorModelParameter;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#model_parameter DialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#parent DialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.placeholders"></a>

```typescript
public readonly placeholders: IResolvable | DialogflowCxGeneratorPlaceholders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#placeholders DialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxGeneratorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#timeouts DialogflowCxGenerator#timeouts}

---

### DialogflowCxGeneratorLlmModelSettings <a name="DialogflowCxGeneratorLlmModelSettings" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

const dialogflowCxGeneratorLlmModelSettings: dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.model">model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.promptText">promptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#model DialogflowCxGenerator#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

### DialogflowCxGeneratorModelParameter <a name="DialogflowCxGeneratorModelParameter" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

const dialogflowCxGeneratorModelParameter: dialogflowCxGenerator.DialogflowCxGeneratorModelParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.maxDecodeSteps">maxDecodeSteps</a></code> | <code>number</code> | The maximum number of tokens to generate. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.temperature">temperature</a></code> | <code>number</code> | The temperature used for sampling. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topK">topK</a></code> | <code>number</code> | If set, the sampling process in each step is limited to the topK tokens with highest probabilities. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topP">topP</a></code> | <code>number</code> | If set, only the tokens comprising the top topP probability mass are considered. |

---

##### `maxDecodeSteps`<sup>Optional</sup> <a name="maxDecodeSteps" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.maxDecodeSteps"></a>

```typescript
public readonly maxDecodeSteps: number;
```

- *Type:* number

The maximum number of tokens to generate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#max_decode_steps DialogflowCxGenerator#max_decode_steps}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

The temperature used for sampling.

Temperature sampling occurs after both topP and topK have been applied.
Valid range: [0.0, 1.0] Low temperature = less random. High temperature = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#temperature DialogflowCxGenerator#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

If set, the sampling process in each step is limited to the topK tokens with highest probabilities.

Valid range: [1, 40] or 1000+. Small topK = less random. Large topK = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#top_k DialogflowCxGenerator#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

If set, only the tokens comprising the top topP probability mass are considered.

If both topP and topK are set, topP will be used for further refining candidates selected with topK.
Valid range: (0.0, 1.0]. Small topP = less random. Large topP = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#top_p DialogflowCxGenerator#top_p}

---

### DialogflowCxGeneratorPlaceholders <a name="DialogflowCxGeneratorPlaceholders" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

const dialogflowCxGeneratorPlaceholders: dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.id">id</a></code> | <code>string</code> | Unique ID used to map custom placeholder to parameters in fulfillment. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.name">name</a></code> | <code>string</code> | Custom placeholder value in the prompt text. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique ID used to map custom placeholder to parameters in fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Custom placeholder value in the prompt text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#name DialogflowCxGenerator#name}

---

### DialogflowCxGeneratorPromptText <a name="DialogflowCxGeneratorPromptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

const dialogflowCxGeneratorPromptText: dialogflowCxGenerator.DialogflowCxGeneratorPromptText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.property.text">text</a></code> | <code>string</code> | Text input which can be used for prompt or banned phrases. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#text DialogflowCxGenerator#text}

---

### DialogflowCxGeneratorTimeouts <a name="DialogflowCxGeneratorTimeouts" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

const dialogflowCxGeneratorTimeouts: dialogflowCxGenerator.DialogflowCxGeneratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxGeneratorLlmModelSettingsOutputReference <a name="DialogflowCxGeneratorLlmModelSettingsOutputReference" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGeneratorLlmModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---


### DialogflowCxGeneratorModelParameterOutputReference <a name="DialogflowCxGeneratorModelParameterOutputReference" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps">resetMaxDecodeSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDecodeSteps` <a name="resetMaxDecodeSteps" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps"></a>

```typescript
public resetMaxDecodeSteps(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopK"></a>

```typescript
public resetTopK(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput">maxDecodeStepsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topKInput">topKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps">maxDecodeSteps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxDecodeStepsInput`<sup>Optional</sup> <a name="maxDecodeStepsInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput"></a>

```typescript
public readonly maxDecodeStepsInput: number;
```

- *Type:* number

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topKInput"></a>

```typescript
public readonly topKInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `maxDecodeSteps`<sup>Required</sup> <a name="maxDecodeSteps" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps"></a>

```typescript
public readonly maxDecodeSteps: number;
```

- *Type:* number

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGeneratorModelParameter;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---


### DialogflowCxGeneratorPlaceholdersList <a name="DialogflowCxGeneratorPlaceholdersList" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get"></a>

```typescript
public get(index: number): DialogflowCxGeneratorPlaceholdersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGeneratorPlaceholders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>[]

---


### DialogflowCxGeneratorPlaceholdersOutputReference <a name="DialogflowCxGeneratorPlaceholdersOutputReference" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGeneratorPlaceholders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>

---


### DialogflowCxGeneratorPromptTextOutputReference <a name="DialogflowCxGeneratorPromptTextOutputReference" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGeneratorPromptText;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---


### DialogflowCxGeneratorTimeoutsOutputReference <a name="DialogflowCxGeneratorTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerator } from '@cdktn/provider-google'

new dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGeneratorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---



