# `apigeeAddonsConfig` Submodule <a name="`apigeeAddonsConfig` Submodule" id="@cdktn/provider-google.apigeeAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeAddonsConfig <a name="ApigeeAddonsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config google_apigee_addons_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfig(scope: Construct, id: string, config: ApigeeAddonsConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig">ApigeeAddonsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig">ApigeeAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig">putAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig">resetAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddonsConfig` <a name="putAddonsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig"></a>

```typescript
public putAddonsConfig(value: ApigeeAddonsConfigAddonsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeAddonsConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

---

##### `resetAddonsConfig` <a name="resetAddonsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig"></a>

```typescript
public resetAddonsConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeAddonsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeAddonsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeAddonsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig">addonsConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput">addonsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput">orgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org">org</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `addonsConfig`<sup>Required</sup> <a name="addonsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig"></a>

```typescript
public readonly addonsConfig: ApigeeAddonsConfigAddonsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeAddonsConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a>

---

##### `addonsConfigInput`<sup>Optional</sup> <a name="addonsConfigInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput"></a>

```typescript
public readonly addonsConfigInput: ApigeeAddonsConfigAddonsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgInput`<sup>Optional</sup> <a name="orgInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput"></a>

```typescript
public readonly orgInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeAddonsConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeAddonsConfigAddonsConfig <a name="ApigeeAddonsConfigAddonsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigAddonsConfig: apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig">advancedApiOpsConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | advanced_api_ops_config block. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig">apiSecurityConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | api_security_config block. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig">connectorsPlatformConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | connectors_platform_config block. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | integration_config block. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig">monetizationConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | monetization_config block. |

---

##### `advancedApiOpsConfig`<sup>Optional</sup> <a name="advancedApiOpsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig"></a>

```typescript
public readonly advancedApiOpsConfig: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#advanced_api_ops_config ApigeeAddonsConfig#advanced_api_ops_config}

---

##### `apiSecurityConfig`<sup>Optional</sup> <a name="apiSecurityConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig"></a>

```typescript
public readonly apiSecurityConfig: ApigeeAddonsConfigAddonsConfigApiSecurityConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#api_security_config ApigeeAddonsConfig#api_security_config}

---

##### `connectorsPlatformConfig`<sup>Optional</sup> <a name="connectorsPlatformConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig"></a>

```typescript
public readonly connectorsPlatformConfig: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#connectors_platform_config ApigeeAddonsConfig#connectors_platform_config}

---

##### `integrationConfig`<sup>Optional</sup> <a name="integrationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig"></a>

```typescript
public readonly integrationConfig: ApigeeAddonsConfigAddonsConfigIntegrationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#integration_config ApigeeAddonsConfig#integration_config}

---

##### `monetizationConfig`<sup>Optional</sup> <a name="monetizationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig"></a>

```typescript
public readonly monetizationConfig: ApigeeAddonsConfigAddonsConfigMonetizationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#monetization_config ApigeeAddonsConfig#monetization_config}

---

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig: apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigApiSecurityConfig <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigAddonsConfigApiSecurityConfig: apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag that specifies whether the API security add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag that specifies whether the API security add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigAddonsConfigConnectorsPlatformConfig: apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag that specifies whether the Connectors Platform add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag that specifies whether the Connectors Platform add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigIntegrationConfig <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigAddonsConfigIntegrationConfig: apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag that specifies whether the Integration add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag that specifies whether the Integration add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigMonetizationConfig <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigAddonsConfigMonetizationConfig: apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag that specifies whether the Monetization add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag that specifies whether the Monetization add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigConfig <a name="ApigeeAddonsConfigConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigConfig: apigeeAddonsConfig.ApigeeAddonsConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org">org</a></code> | <code>string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig">addonsConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#org ApigeeAddonsConfig#org}

---

##### `addonsConfig`<sup>Optional</sup> <a name="addonsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig"></a>

```typescript
public readonly addonsConfig: ApigeeAddonsConfigAddonsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#addons_config ApigeeAddonsConfig#addons_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#deletion_policy ApigeeAddonsConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeAddonsConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#timeouts ApigeeAddonsConfig#timeouts}

---

### ApigeeAddonsConfigTimeouts <a name="ApigeeAddonsConfigTimeouts" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

const apigeeAddonsConfigTimeouts: apigeeAddonsConfig.ApigeeAddonsConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---


### ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeAddonsConfigAddonsConfigApiSecurityConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---


### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---


### ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeAddonsConfigAddonsConfigIntegrationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeAddonsConfigAddonsConfigMonetizationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig">putAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig">putApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig">putConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig">putIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig">putMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig">resetAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig">resetApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig">resetConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig">resetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig">resetMonetizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedApiOpsConfig` <a name="putAdvancedApiOpsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig"></a>

```typescript
public putAdvancedApiOpsConfig(value: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `putApiSecurityConfig` <a name="putApiSecurityConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig"></a>

```typescript
public putApiSecurityConfig(value: ApigeeAddonsConfigAddonsConfigApiSecurityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `putConnectorsPlatformConfig` <a name="putConnectorsPlatformConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig"></a>

```typescript
public putConnectorsPlatformConfig(value: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `putIntegrationConfig` <a name="putIntegrationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig"></a>

```typescript
public putIntegrationConfig(value: ApigeeAddonsConfigAddonsConfigIntegrationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `putMonetizationConfig` <a name="putMonetizationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig"></a>

```typescript
public putMonetizationConfig(value: ApigeeAddonsConfigAddonsConfigMonetizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `resetAdvancedApiOpsConfig` <a name="resetAdvancedApiOpsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig"></a>

```typescript
public resetAdvancedApiOpsConfig(): void
```

##### `resetApiSecurityConfig` <a name="resetApiSecurityConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig"></a>

```typescript
public resetApiSecurityConfig(): void
```

##### `resetConnectorsPlatformConfig` <a name="resetConnectorsPlatformConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig"></a>

```typescript
public resetConnectorsPlatformConfig(): void
```

##### `resetIntegrationConfig` <a name="resetIntegrationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig"></a>

```typescript
public resetIntegrationConfig(): void
```

##### `resetMonetizationConfig` <a name="resetMonetizationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig"></a>

```typescript
public resetMonetizationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig">advancedApiOpsConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig">apiSecurityConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig">connectorsPlatformConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig">integrationConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig">monetizationConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput">advancedApiOpsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput">apiSecurityConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput">connectorsPlatformConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput">integrationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput">monetizationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedApiOpsConfig`<sup>Required</sup> <a name="advancedApiOpsConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig"></a>

```typescript
public readonly advancedApiOpsConfig: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a>

---

##### `apiSecurityConfig`<sup>Required</sup> <a name="apiSecurityConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig"></a>

```typescript
public readonly apiSecurityConfig: ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a>

---

##### `connectorsPlatformConfig`<sup>Required</sup> <a name="connectorsPlatformConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig"></a>

```typescript
public readonly connectorsPlatformConfig: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a>

---

##### `integrationConfig`<sup>Required</sup> <a name="integrationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig"></a>

```typescript
public readonly integrationConfig: ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a>

---

##### `monetizationConfig`<sup>Required</sup> <a name="monetizationConfig" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig"></a>

```typescript
public readonly monetizationConfig: ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a>

---

##### `advancedApiOpsConfigInput`<sup>Optional</sup> <a name="advancedApiOpsConfigInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput"></a>

```typescript
public readonly advancedApiOpsConfigInput: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `apiSecurityConfigInput`<sup>Optional</sup> <a name="apiSecurityConfigInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput"></a>

```typescript
public readonly apiSecurityConfigInput: ApigeeAddonsConfigAddonsConfigApiSecurityConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `connectorsPlatformConfigInput`<sup>Optional</sup> <a name="connectorsPlatformConfigInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput"></a>

```typescript
public readonly connectorsPlatformConfigInput: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `integrationConfigInput`<sup>Optional</sup> <a name="integrationConfigInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput"></a>

```typescript
public readonly integrationConfigInput: ApigeeAddonsConfigAddonsConfigIntegrationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `monetizationConfigInput`<sup>Optional</sup> <a name="monetizationConfigInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput"></a>

```typescript
public readonly monetizationConfigInput: ApigeeAddonsConfigAddonsConfigMonetizationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeAddonsConfigAddonsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---


### ApigeeAddonsConfigTimeoutsOutputReference <a name="ApigeeAddonsConfigTimeoutsOutputReference" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeAddonsConfig } from '@cdktn/provider-google'

new apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeAddonsConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

---



