import { Eye, EyeOff, Feather, Shield } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdentityGateArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  SceneHeader,
  SealBadge,
} from '../components/primitives/ScenePrimitives';
import { IdentityGateStage } from '../components/stages/SceneStages';
import { WoodFooter } from '../components/scene/OdysseyUI';
import { useProgressStore } from '../store/useProgressStore';

const copy = {
  eyebrow: 'Identity Gate',
  title: 'Resume Your Quest',
  subtitle: 'Welcome back, Scholar. Present your academy seal to re-enter the Odyssey.',
  account: 'UNNC ID / Email',
  accountPlaceholder: 'e.g. 20451234@nottingham.edu.cn',
  password: 'Password',
  remember: 'Remember Me',
  forgot: 'Forgot Password?',
  submit: 'Enter the Odyssey',
  registerPrefix: 'New Scholar?',
  register: 'Register here',
  crestTitle: 'ACADEMY CREST',
};

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('scholar1');
  const [showPassword, setShowPassword] = useState(false);
  const login = useProgressStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    login(email);
    navigate('/welcome');
  };

  return (
    <div className="scene-page scene-page-entrance scene-page-identity">
      <SceneHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        lede={copy.subtitle}
      />

      <IdentityGateStage
        className="identity-stage"
        hero={(
          <HeroArtifact
            className="identity-stage__hero"
            artifact={<IdentityGateArtwork />}
            children={(
              <ParchmentPanel eyebrow="Access Scroll" title="Scholar Login" className="identity-stage__panel">
                <form className="identity-stage__form" onSubmit={handleLogin}>
                  <label className="identity-stage__field">
                    <span>{copy.account}</span>
                    <div className="identity-stage__shell">
                      <Feather size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder={copy.accountPlaceholder}
                        required
                      />
                    </div>
                  </label>

                  <label className="identity-stage__field">
                    <span>{copy.password}</span>
                    <div className="identity-stage__shell">
                      <Shield size={18} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="identity-stage__toggle"
                        onClick={() => setShowPassword((value) => !value)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </label>

                  <div className="identity-stage__options">
                    <label className="identity-stage__check">
                      <input type="checkbox" />
                      <span>{copy.remember}</span>
                    </label>
                    <a href="#">{copy.forgot}</a>
                  </div>

                  <BrassAction type="submit">{copy.submit}</BrassAction>

                  <p className="identity-stage__register">
                    {copy.registerPrefix} <a href="#">{copy.register}</a>
                  </p>

                  <div className="identity-stage__crest">
                    <SealBadge label={copy.crestTitle} tone="gold" />
                    <p>Secured by the mechanical ward of the Academy gate.</p>
                  </div>
                </form>
              </ParchmentPanel>
            )}
          />
        )}
      />

      <WoodFooter />
    </div>
  );
};
