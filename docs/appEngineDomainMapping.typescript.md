# `appEngineDomainMapping` Submodule <a name="`appEngineDomainMapping` Submodule" id="@cdktn/provider-google.appEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineDomainMapping <a name="AppEngineDomainMapping" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

new appEngineDomainMapping.AppEngineDomainMapping(scope: Construct, id: string, config: AppEngineDomainMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig">AppEngineDomainMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig">AppEngineDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings">putSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy">resetOverrideStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings">resetSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSslSettings` <a name="putSslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings"></a>

```typescript
public putSslSettings(value: AppEngineDomainMappingSslSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineDomainMappingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOverrideStrategy` <a name="resetOverrideStrategy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy"></a>

```typescript
public resetOverrideStrategy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSslSettings` <a name="resetSslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings"></a>

```typescript
public resetSslSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppEngineDomainMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

appEngineDomainMapping.AppEngineDomainMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppEngineDomainMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineDomainMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppEngineDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords">resourceRecords</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings">sslSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput">overrideStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput">sslSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy">overrideStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: AppEngineDomainMappingResourceRecordsList;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a>

---

##### `sslSettings`<sup>Required</sup> <a name="sslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings"></a>

```typescript
public readonly sslSettings: AppEngineDomainMappingSslSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineDomainMappingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `overrideStrategyInput`<sup>Optional</sup> <a name="overrideStrategyInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput"></a>

```typescript
public readonly overrideStrategyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sslSettingsInput`<sup>Optional</sup> <a name="sslSettingsInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput"></a>

```typescript
public readonly sslSettingsInput: AppEngineDomainMappingSslSettings;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineDomainMappingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `overrideStrategy`<sup>Required</sup> <a name="overrideStrategy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy"></a>

```typescript
public readonly overrideStrategy: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineDomainMappingConfig <a name="AppEngineDomainMappingConfig" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

const appEngineDomainMappingConfig: appEngineDomainMapping.AppEngineDomainMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName">domainName</a></code> | <code>string</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy">overrideStrategy</a></code> | <code>string</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings">sslSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#domain_name AppEngineDomainMapping#domain_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideStrategy`<sup>Optional</sup> <a name="overrideStrategy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy"></a>

```typescript
public readonly overrideStrategy: string;
```

- *Type:* string

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#override_strategy AppEngineDomainMapping#override_strategy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}.

---

##### `sslSettings`<sup>Optional</sup> <a name="sslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings"></a>

```typescript
public readonly sslSettings: AppEngineDomainMappingSslSettings;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#ssl_settings AppEngineDomainMapping#ssl_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineDomainMappingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#timeouts AppEngineDomainMapping#timeouts}

---

### AppEngineDomainMappingResourceRecords <a name="AppEngineDomainMappingResourceRecords" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

const appEngineDomainMappingResourceRecords: appEngineDomainMapping.AppEngineDomainMappingResourceRecords = { ... }
```


### AppEngineDomainMappingSslSettings <a name="AppEngineDomainMappingSslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

const appEngineDomainMappingSslSettings: appEngineDomainMapping.AppEngineDomainMappingSslSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType">sslManagementType</a></code> | <code>string</code> | SSL management type for this domain. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId">certificateId</a></code> | <code>string</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `sslManagementType`<sup>Required</sup> <a name="sslManagementType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```typescript
public readonly sslManagementType: string;
```

- *Type:* string

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#ssl_management_type AppEngineDomainMapping#ssl_management_type}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#certificate_id AppEngineDomainMapping#certificate_id}

---

### AppEngineDomainMappingTimeouts <a name="AppEngineDomainMappingTimeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

const appEngineDomainMappingTimeouts: appEngineDomainMapping.AppEngineDomainMappingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineDomainMappingResourceRecordsList <a name="AppEngineDomainMappingResourceRecordsList" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

new appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get"></a>

```typescript
public get(index: number): AppEngineDomainMappingResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppEngineDomainMappingResourceRecordsOutputReference <a name="AppEngineDomainMappingResourceRecordsOutputReference" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

new appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">rrdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rrdata`<sup>Required</sup> <a name="rrdata" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```typescript
public readonly rrdata: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineDomainMappingResourceRecords;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a>

---


### AppEngineDomainMappingSslSettingsOutputReference <a name="AppEngineDomainMappingSslSettingsOutputReference" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

new appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">pendingManagedCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">sslManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">sslManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pendingManagedCertificateId`<sup>Required</sup> <a name="pendingManagedCertificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```typescript
public readonly pendingManagedCertificateId: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `sslManagementTypeInput`<sup>Optional</sup> <a name="sslManagementTypeInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```typescript
public readonly sslManagementTypeInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `sslManagementType`<sup>Required</sup> <a name="sslManagementType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```typescript
public readonly sslManagementType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineDomainMappingSslSettings;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---


### AppEngineDomainMappingTimeoutsOutputReference <a name="AppEngineDomainMappingTimeoutsOutputReference" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineDomainMapping } from '@cdktn/provider-google'

new appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineDomainMappingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---



