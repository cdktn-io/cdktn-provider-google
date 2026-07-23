# `geminiCodeToolsSettingBinding` Submodule <a name="`geminiCodeToolsSettingBinding` Submodule" id="@cdktn/provider-google.geminiCodeToolsSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeToolsSettingBinding <a name="GeminiCodeToolsSettingBinding" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding google_gemini_code_tools_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

new geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding(scope: Construct, id: string, config: GeminiCodeToolsSettingBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig">GeminiCodeToolsSettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig">GeminiCodeToolsSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiCodeToolsSettingBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProduct` <a name="resetProduct" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiCodeToolsSettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GeminiCodeToolsSettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiCodeToolsSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiCodeToolsSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiCodeToolsSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference">GeminiCodeToolsSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingIdInput">codeToolsSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiCodeToolsSettingBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference">GeminiCodeToolsSettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `codeToolsSettingIdInput`<sup>Optional</sup> <a name="codeToolsSettingIdInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingIdInput"></a>

```typescript
public readonly codeToolsSettingIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingIdInput"></a>

```typescript
public readonly settingBindingIdInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiCodeToolsSettingBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingId"></a>

```typescript
public readonly codeToolsSettingId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeToolsSettingBindingConfig <a name="GeminiCodeToolsSettingBindingConfig" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.Initializer"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

const geminiCodeToolsSettingBindingConfig: geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.target">target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#id GeminiCodeToolsSettingBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.product">product</a></code> | <code>string</code> | Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#project GeminiCodeToolsSettingBinding#project}. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.codeToolsSettingId"></a>

```typescript
public readonly codeToolsSettingId: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#code_tools_setting_id GeminiCodeToolsSettingBinding#code_tools_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#setting_binding_id GeminiCodeToolsSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#target GeminiCodeToolsSettingBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#deletion_policy GeminiCodeToolsSettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#id GeminiCodeToolsSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#labels GeminiCodeToolsSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#location GeminiCodeToolsSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#product GeminiCodeToolsSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#project GeminiCodeToolsSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiCodeToolsSettingBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#timeouts GeminiCodeToolsSettingBinding#timeouts}

---

### GeminiCodeToolsSettingBindingTimeouts <a name="GeminiCodeToolsSettingBindingTimeouts" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.Initializer"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

const geminiCodeToolsSettingBindingTimeouts: geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#create GeminiCodeToolsSettingBinding#create}. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#delete GeminiCodeToolsSettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#update GeminiCodeToolsSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#create GeminiCodeToolsSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#delete GeminiCodeToolsSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_code_tools_setting_binding#update GeminiCodeToolsSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeToolsSettingBindingTimeoutsOutputReference <a name="GeminiCodeToolsSettingBindingTimeoutsOutputReference" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiCodeToolsSettingBinding } from '@cdktn/provider-google'

new geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiCodeToolsSettingBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a>

---



