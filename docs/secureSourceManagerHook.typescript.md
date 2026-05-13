# `secureSourceManagerHook` Submodule <a name="`secureSourceManagerHook` Submodule" id="@cdktn/provider-google.secureSourceManagerHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerHook <a name="SecureSourceManagerHook" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook google_secure_source_manager_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

new secureSourceManagerHook.SecureSourceManagerHook(scope: Construct, id: string, config: SecureSourceManagerHookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig">SecureSourceManagerHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig">SecureSourceManagerHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putPushOption">putPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetPushOption">resetPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetSensitiveQueryString">resetSensitiveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPushOption` <a name="putPushOption" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putPushOption"></a>

```typescript
public putPushOption(value: SecureSourceManagerHookPushOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putPushOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts"></a>

```typescript
public putTimeouts(value: SecureSourceManagerHookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEvents` <a name="resetEvents" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetEvents"></a>

```typescript
public resetEvents(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPushOption` <a name="resetPushOption" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetPushOption"></a>

```typescript
public resetPushOption(): void
```

##### `resetSensitiveQueryString` <a name="resetSensitiveQueryString" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetSensitiveQueryString"></a>

```typescript
public resetSensitiveQueryString(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecureSourceManagerHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isConstruct"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

secureSourceManagerHook.SecureSourceManagerHook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecureSourceManagerHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureSourceManagerHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureSourceManagerHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOption">pushOption</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference">SecureSourceManagerHookPushOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference">SecureSourceManagerHookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookIdInput">hookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOptionInput">pushOptionInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryStringInput">sensitiveQueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUriInput">targetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookId">hookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryString">sensitiveQueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUri">targetUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pushOption`<sup>Required</sup> <a name="pushOption" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOption"></a>

```typescript
public readonly pushOption: SecureSourceManagerHookPushOptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference">SecureSourceManagerHookPushOptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeouts"></a>

```typescript
public readonly timeouts: SecureSourceManagerHookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference">SecureSourceManagerHookTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `hookIdInput`<sup>Optional</sup> <a name="hookIdInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookIdInput"></a>

```typescript
public readonly hookIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pushOptionInput`<sup>Optional</sup> <a name="pushOptionInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOptionInput"></a>

```typescript
public readonly pushOptionInput: SecureSourceManagerHookPushOption;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `sensitiveQueryStringInput`<sup>Optional</sup> <a name="sensitiveQueryStringInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryStringInput"></a>

```typescript
public readonly sensitiveQueryStringInput: string;
```

- *Type:* string

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUriInput"></a>

```typescript
public readonly targetUriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecureSourceManagerHookTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookId"></a>

```typescript
public readonly hookId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `sensitiveQueryString`<sup>Required</sup> <a name="sensitiveQueryString" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryString"></a>

```typescript
public readonly sensitiveQueryString: string;
```

- *Type:* string

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerHookConfig <a name="SecureSourceManagerHookConfig" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.Initializer"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

const secureSourceManagerHookConfig: secureSourceManagerHook.SecureSourceManagerHookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.hookId">hookId</a></code> | <code>string</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.location">location</a></code> | <code>string</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.targetUri">targetUri</a></code> | <code>string</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.events">events</a></code> | <code>string[]</code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.pushOption">pushOption</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.sensitiveQueryString">sensitiveQueryString</a></code> | <code>string</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.hookId"></a>

```typescript
public readonly hookId: string;
```

- *Type:* string

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#hook_id SecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#location SecureSourceManagerHook#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#repository_id SecureSourceManagerHook#repository_id}

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#target_uri SecureSourceManagerHook#target_uri}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#disabled SecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#events SecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}.

---

##### `pushOption`<sup>Optional</sup> <a name="pushOption" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.pushOption"></a>

```typescript
public readonly pushOption: SecureSourceManagerHookPushOption;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#push_option SecureSourceManagerHook#push_option}

---

##### `sensitiveQueryString`<sup>Optional</sup> <a name="sensitiveQueryString" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.sensitiveQueryString"></a>

```typescript
public readonly sensitiveQueryString: string;
```

- *Type:* string

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#sensitive_query_string SecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecureSourceManagerHookTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#timeouts SecureSourceManagerHook#timeouts}

---

### SecureSourceManagerHookPushOption <a name="SecureSourceManagerHookPushOption" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption.Initializer"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

const secureSourceManagerHookPushOption: secureSourceManagerHook.SecureSourceManagerHookPushOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption.property.branchFilter">branchFilter</a></code> | <code>string</code> | Trigger hook for matching branches only. |

---

##### `branchFilter`<sup>Optional</sup> <a name="branchFilter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption.property.branchFilter"></a>

```typescript
public readonly branchFilter: string;
```

- *Type:* string

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#branch_filter SecureSourceManagerHook#branch_filter}

---

### SecureSourceManagerHookTimeouts <a name="SecureSourceManagerHookTimeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.Initializer"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

const secureSourceManagerHookTimeouts: secureSourceManagerHook.SecureSourceManagerHookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#create SecureSourceManagerHook#create}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#delete SecureSourceManagerHook#delete}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#update SecureSourceManagerHook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#create SecureSourceManagerHook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#delete SecureSourceManagerHook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/secure_source_manager_hook#update SecureSourceManagerHook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerHookPushOptionOutputReference <a name="SecureSourceManagerHookPushOptionOutputReference" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

new secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resetBranchFilter">resetBranchFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchFilter` <a name="resetBranchFilter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resetBranchFilter"></a>

```typescript
public resetBranchFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput">branchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilter">branchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchFilterInput`<sup>Optional</sup> <a name="branchFilterInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput"></a>

```typescript
public readonly branchFilterInput: string;
```

- *Type:* string

---

##### `branchFilter`<sup>Required</sup> <a name="branchFilter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilter"></a>

```typescript
public readonly branchFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecureSourceManagerHookPushOption;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

---


### SecureSourceManagerHookTimeoutsOutputReference <a name="SecureSourceManagerHookTimeoutsOutputReference" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerHook } from '@cdktn/provider-google'

new secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecureSourceManagerHookTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

---



