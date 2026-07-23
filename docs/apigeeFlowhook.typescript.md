# `apigeeFlowhook` Submodule <a name="`apigeeFlowhook` Submodule" id="@cdktn/provider-google.apigeeFlowhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeFlowhook <a name="ApigeeFlowhook" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook google_apigee_flowhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

new apigeeFlowhook.ApigeeFlowhook(scope: Construct, id: string, config: ApigeeFlowhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig">ApigeeFlowhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig">ApigeeFlowhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetContinueOnError">resetContinueOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeFlowhookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>

---

##### `resetContinueOnError` <a name="resetContinueOnError" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetContinueOnError"></a>

```typescript
public resetContinueOnError(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeFlowhook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isConstruct"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

apigeeFlowhook.ApigeeFlowhook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformElement"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

apigeeFlowhook.ApigeeFlowhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformResource"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

apigeeFlowhook.ApigeeFlowhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.generateConfigForImport"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

apigeeFlowhook.ApigeeFlowhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeFlowhook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeFlowhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeFlowhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeFlowhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference">ApigeeFlowhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnErrorInput">continueOnErrorInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPointInput">flowHookPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflowInput">sharedflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnError">continueOnError</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPoint">flowHookPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflow">sharedflow</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeFlowhookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference">ApigeeFlowhookTimeoutsOutputReference</a>

---

##### `continueOnErrorInput`<sup>Optional</sup> <a name="continueOnErrorInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnErrorInput"></a>

```typescript
public readonly continueOnErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `flowHookPointInput`<sup>Optional</sup> <a name="flowHookPointInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPointInput"></a>

```typescript
public readonly flowHookPointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `sharedflowInput`<sup>Optional</sup> <a name="sharedflowInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflowInput"></a>

```typescript
public readonly sharedflowInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeFlowhookTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>

---

##### `continueOnError`<sup>Required</sup> <a name="continueOnError" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `flowHookPoint`<sup>Required</sup> <a name="flowHookPoint" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPoint"></a>

```typescript
public readonly flowHookPoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `sharedflow`<sup>Required</sup> <a name="sharedflow" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflow"></a>

```typescript
public readonly sharedflow: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeFlowhookConfig <a name="ApigeeFlowhookConfig" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.Initializer"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

const apigeeFlowhookConfig: apigeeFlowhook.ApigeeFlowhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.environment">environment</a></code> | <code>string</code> | The resource ID of the environment. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.flowHookPoint">flowHookPoint</a></code> | <code>string</code> | Where in the API call flow the flow hook is invoked. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the environment. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.sharedflow">sharedflow</a></code> | <code>string</code> | Id of the Sharedflow attaching to a flowhook point. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.continueOnError">continueOnError</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag that specifies whether execution should continue if the flow hook throws an exception. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.description">description</a></code> | <code>string</code> | Description of the flow hook. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#id ApigeeFlowhook#id}. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#environment ApigeeFlowhook#environment}

---

##### `flowHookPoint`<sup>Required</sup> <a name="flowHookPoint" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.flowHookPoint"></a>

```typescript
public readonly flowHookPoint: string;
```

- *Type:* string

Where in the API call flow the flow hook is invoked.

Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#flow_hook_point ApigeeFlowhook#flow_hook_point}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#org_id ApigeeFlowhook#org_id}

---

##### `sharedflow`<sup>Required</sup> <a name="sharedflow" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.sharedflow"></a>

```typescript
public readonly sharedflow: string;
```

- *Type:* string

Id of the Sharedflow attaching to a flowhook point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#sharedflow ApigeeFlowhook#sharedflow}

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag that specifies whether execution should continue if the flow hook throws an exception.

Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#continue_on_error ApigeeFlowhook#continue_on_error}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#deletion_policy ApigeeFlowhook#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the flow hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#description ApigeeFlowhook#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#id ApigeeFlowhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeFlowhookTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#timeouts ApigeeFlowhook#timeouts}

---

### ApigeeFlowhookTimeouts <a name="ApigeeFlowhookTimeouts" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.Initializer"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

const apigeeFlowhookTimeouts: apigeeFlowhook.ApigeeFlowhookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#create ApigeeFlowhook#create}. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#delete ApigeeFlowhook#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#create ApigeeFlowhook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_flowhook#delete ApigeeFlowhook#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeFlowhookTimeoutsOutputReference <a name="ApigeeFlowhookTimeoutsOutputReference" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeFlowhook } from '@cdktn/provider-google'

new apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeFlowhookTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>

---



